import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

const POSTS = [
  { id: crypto.randomUUID(), title: "Post 1" },
  { id: crypto.randomUUID(), title: "Post 2" },
];

function App() {

  const queryClient = useQueryClient(); //a lekérdezést menedzselő kliens függvényeihez kell, mint pl.: invalidateQueries()

  const postsQuery = useQuery(
    { 
      queryKey: ["posts"],  //egyedi azonosítója a lekérdezésnek. Lehet több elemű tömb pl ["test",1,2,3,4,...]
      queryFn: () => wait(1000).then(() => [...POSTS]),  //egy aszinkron (promise) függvényt vár, ami ezesetben csak vár 1 mp-t
      //queryFn: () => Promise.reject("Error message"), itt hosszabb ideig fog futni, mivel többször is megpróbálja, ha nem sikerül a lekérdezés.
    }
  );

  const newPostMutation = useMutation({
    mutationFn: (title:string) => {
      return wait(1000).then(() => 
      POSTS.push({id: crypto.randomUUID(), title})
        )
      },
      onSuccess: () => {
        queryClient.invalidateQueries(["posts"]) //invalidálja a régi értékkel rendelkező lekérdezés eredményét, enélkül nem frissül az adat.
      }
    })

  if (postsQuery.isLoading) return <h1>Loading...</h1>
  if (postsQuery.isError) return <pre>{JSON.stringify(postsQuery.error)}</pre>

  function wait(duration: number)
  {
    return new Promise(resolve => setTimeout(resolve, duration))  //a promise "megígéri", hogy a jövőben majd lesz értéke. Lehet: pending, fulfilled vagy rejected.
  }

  return (
    <>
    <div>
      {postsQuery.data.map(post => (
        <div key={post.id}>{post.title}</div>
      ))}
    </div>
    <button disabled={newPostMutation.isLoading || postsQuery.isFetching} onClick={() => newPostMutation.mutate("New Post")}>
        Add New
    </button>
    </>
  );
}

export default App;
