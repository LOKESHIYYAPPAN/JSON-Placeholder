import { useEffect, useState } from 'react';
import ButtonGroup from './ButtonGroup';
import Content from './Content';

function App() {
  const API_URL = `https://jsonplaceholder.typicode.com`
  const [path, setPath] = useState("users")
  const [isLoading, setIsLoading] = useState(true)
  const [err, setErr] = useState(null)
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true)
        const response = await fetch(`${API_URL}/${path}`)
        console.log(`${API_URL}/${path}`)
        if (!response.ok) throw Error("Please Reload the App")
        const data = await response.json()
        // setData(data)
      } catch (err) {
        // console.log(err)
        setErr(err.message)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [path])

  return (
    <div className="App">
      <ButtonGroup
        setPath={setPath}
      />
      <main>
        {!err && !isLoading &&
          <Content
            data={data}
          />
        }
        {err && !isLoading && <p id='err'>{err}</p>}
        {isLoading && <p id='load'>Loading...</p>}
      </main>
    </div>
  );
}

export default App;
