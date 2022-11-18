


export async function  getInvestments(jwt){

    const resp = await fetch("/api/investments", {
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${jwt}`,
      },
      method: "GET",
    })
    const data = await resp.json()

    return data
}


export const addInvestment = (jwt) => {

    fetch("/api/investments", {
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${jwt}`,
      },
      method: "POST",

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