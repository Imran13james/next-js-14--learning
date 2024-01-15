'use server'
export async function getServerSideProps(context: any) {
    try {
        const res = await fetch(`https://dummyjson.com/products`);
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const projects = await res.json();
        console.log("Data fetched successfully!");
        return { props: { projects } };
      } catch (error) {
        console.error("Error fetching data:", error);
        return { props: { projects: [] } };
      }
  }
