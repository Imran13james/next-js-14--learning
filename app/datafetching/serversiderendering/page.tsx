async function produclist(params: any) {
    const response = await fetch(
        `https://jsonplaceholder.typicode.com/todos`
      );
      if (response.ok) {
        const data = await response.json();
        return data.products;
      } else {
        throw new Error("Something went wrong");
      }
    }

    export default async function serverside(){
     
     return(
        <>
        <div>hell world</div>
        </>
     )
    }