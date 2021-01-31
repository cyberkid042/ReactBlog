import BlogList from './BlogList';
import useFetch from './useFetch';



const Home = () => {

    const {data, error, isLoading} = useFetch('http://localhost:8000/blogs')

    return ( 
        <div className="home">
            <div>
                {error && <div> {error }</div>}
                {isLoading && <div>Loading...</div>}
                {data && <BlogList blogs={data} title="All Blogs" />}
            </div>
        </div>
     );
}
 
export default Home;