


export const getInvestments = (jwt) =>{
    let investments;
    fetch("/api/investments", {
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${jwt}`,
      },
      method: "GET",
    })
      .then((response) => {
        if (response.status === 200) console.l;
      })
      .then((data) => {
        return data
      });
      console.log(investments)
      return investments;
}


export const addInvestment = (jwt) => {

    fetch("/api/investments", {
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${jwt}`,
      },
      method: "POST",
      body: JSON.stringify({
        /*
          "description": newInvestment["description"],
          "name": newInvestment["invname"],
          "ticker": newInvestment["ticker"],
          */
      }),
    })
      .then((response) => {
        if (response.status === 200) console.log(response);
      })
      .then((data) => {
        console.log(data);
      });
}

export const updateInvestment = (jwt, company) => {
    fetch("/api/investments", {
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${jwt}`,
        },
        method: "PUT",
        body: JSON.stringify({
           ...company
        }),
      })
        .then((response) => {
          if (response.status === 200) return response.json();
        })
        .then((data) => {
          console.log(data)
        });

}