import React, { useEffect, useState } from "react";
import axios from "axios";
import GalaryPhoto from "../GalaryPhoto/GalaryPhoto";
import "./GalaryList.css";

function GalaryList() {
  const [photo, setPhoto] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  

  async function downloadPhotos() {
    // 1st STEP
    const response = await axios.get(
     'https://api.slingacademy.com/v1/sample-data/photos?limit=21'
    );
    console.log("RESPONSE", response);
    // it downloads 10 photos

      let limit = response.data.limit;
      limit= 20;
      


    // 2nd STEP
    const galaryTenPhotos = response.data.photos;
    console.log("GalaryPhotos:", galaryTenPhotos);
    // We extract Array of 10 photos,
    // [{},{}{}....10]

    //3rd STEP
    const galaryPhotosPromises = galaryTenPhotos.map((element) => {
      axios.get(element.url);

      return {
        name: element.title,
        id: element.id,
        image: element.url,
        Description: element.description,
      };
    });

    //     4th STEP
    const allPhotosData = await axios.all(galaryPhotosPromises);
    console.log("4th Step:- - allPhotosData", allPhotosData);
    // Ex:- [
    //       {data:{}, status:222, headers:"AxiosHeaders"},
    //       {data:{}, status:223, headers:"AxiosHeaders"},
    //       {data:{}, status:224, headers:"AxiosHeaders"},
    //       {},........{}
    //      ]

    setPhoto(allPhotosData);
    setIsLoading(false);
  }

  useEffect(() => {
    //Code
    downloadPhotos();
  }, []);

  return (
    <div className="main-container">
      <div className="heading">
        <h5>Galary Photo</h5>
      </div>
      <div className="galary">
        {isLoading
          ? "Loading"
          : photo.map((elem) => (
              <GalaryPhoto
                name={elem.name}
                image={elem.image}
                id={elem.id}
                description={elem.Description}
                key={elem.id}
              />
            ))}
      </div>
      
    </div>
  );
}

export default GalaryList;
