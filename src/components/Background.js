// jshint esversion:6
import React, {useState, useEffect} from "react";
import Content from "./Content";

function Background(){

 const [data, setData] = useState([]);
  useEffect(()=>{
    fetch('https://api.spacexdata.com/v3/history')
      .then(
        function(response) {
          if (response.status !== 200) {
            console.log('Looks like there was a problem. Status Code: ' +
            response.status);
          return;
        }

    // Examine the text in the response
      response.json().then(function(res) {
        setData(res);
      });
  });
});

return <Content data={data}/>;
}
// .catch(function(err) {
//   console.log('Fetch Error :-S', err);
// });
//
//
//
//     const fetchData = async ()=>{
//     const result = await fetch('https://api.spacexdata.com/v3/history');
//     console.log(result.body);
//     setData(result.body);
// }; fetchData();}, []);
// return <p>{data}</p>
//
// }

export default Background;
