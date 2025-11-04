// import React, { useEffect, useState } from "react";
// import NewsItem from "./NewsItem";

// const Newsboard = ({ category }) => {
//   const [news, setNews] = useState([]);

//   useEffect(() => {
//     const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_NEWS_API}`;
    
//     fetch(url)
//       .then(response => response.json())
//       .then(data => setNews(data.articles))
//       .catch(err => console.error("Error fetching news:", err));
//   }, [category]);

//   return (
//     <div className="container my-3">
//       <h2 className="text-center">
//         Latest <span className="badge bg-danger">News</span>
//       </h2> 
//       <div className="row">
//         {news.map((item, index) => (
//           <NewsItem
//             key={index}
//             title={item.title}
//             description={item.description}
//             src={item.urlToImage}
//             newsUrl={item.url}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Newsboard;
import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

const Newsboard = ({ category }) => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    console.log("API Key:", import.meta.env.VITE_NEWS_API ? "Loaded" : "Missing");
    console.log("Category:", category);
    
    // Mock news data for development - 6 items
const mockNews = [
  {
    title: `${category} News: Major Breakthrough Announced`,
    description: "Industry leaders have announced a significant development that promises to reshape the landscape and create new opportunities.",
    urlToImage: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=200&fit=crop",
    url: "#"
  },
  {
    title: `Experts Analyze ${category} Market Trends`,
    description: "Leading analysts provide insights into current market conditions and predict future directions based on recent data.",
    urlToImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=200&fit=crop",
    url: "#"
  },
  {
    title: `Innovation Drives ${category} Sector Growth`,
    description: "New technologies and approaches are delivering impressive results, with companies reporting substantial improvements.",
    urlToImage: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=200&fit=crop",
    url: "#"
  },
  {
    title: `${category} Conference Reveals New Research`,
    description: "The annual industry conference showcased cutting-edge research and development from top institutions worldwide.",
    urlToImage: "https://images.unsplash.com/photo-1495465798138-718f86d1a4bc?w=400&h=200&fit=crop",
    url: "#"
  },
  {
    title: `Global ${category} Initiative Launches`,
    description: "An international collaboration aims to address key challenges and promote sustainable development across borders.",
    urlToImage: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=200&fit=crop",
    url: "#"
  },
  {
    title: `${category} Education Program Expands Reach`,
    description: "Educational institutions are reporting increased enrollment in programs focused on developing future industry leaders.",
    urlToImage: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=200&fit=crop",
    url: "#"
  },
  // Add 3 more items
  {
    title: `${category} Industry Sets New Standards`,
    description: "Regulatory bodies have introduced updated standards to ensure quality and safety across the sector.",
    urlToImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=200&fit=crop",
    url: "#"
  },
  {
    title: `Investors Flock to ${category} Startups`,
    description: "Venture capital funding reaches record levels as investors recognize the growth potential in emerging companies.",
    urlToImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop",
    url: "#"
  },
  {
    title: `${category} Professionals See Salary Growth`,
    description: "Recent surveys indicate significant wage increases for skilled professionals in this rapidly evolving field.",
    urlToImage: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=200&fit=crop",
    url: "#"
  }
];

    setNews(mockNews);
    setLoading(false);

    // Uncomment below when you want to use real API
    /*
    const fetchNews = async () => {
      try {
        setLoading(true);
        setError(null);
        const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_NEWS_API}`;
        console.log("Fetching from:", url);
        
        const response = await fetch(url);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        console.log("API Response:", data);
        
        if (data.status === "ok") {
          setNews(data.articles || []);
        } else {
          throw new Error(data.message || "Failed to fetch news");
        }
      } catch (err) {
        console.error("Error fetching news:", err);
        setError(err.message);
        setNews([]);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
    */
  }, [category]);

  if (loading) {
return (
  <div className="container my-3">
    <h2 className="text-center mb-4">
      Latest <span className="badge bg-danger">News</span> - {category.charAt(0).toUpperCase() + category.slice(1)}
    </h2> 
    <div className="row g-4">
      {news.length > 0 ? (
        news.map((item, index) => (
          <div className="col-12 col-md-6 col-xl-4" key={index}>
            <NewsItem
              title={item.title}
              description={item.description}
              src={item.urlToImage}
              newsUrl={item.url}
            />
          </div>
        ))
      ) : (
        <div className="col-12 text-center">
          <p className="text-muted">No news articles found for this category.</p>
        </div>
      )}
    </div>
  </div>
    );
  }

  return (
    <div className="container my-3">
      <h2 className="text-center">
        Latest <span className="badge bg-danger">News</span> - {category.charAt(0).toUpperCase() + category.slice(1)}
      </h2> 
      <div className="row">
        {news.length > 0 ? (
          news.map((item, index) => (
            <NewsItem
              key={index}
              title={item.title}
              description={item.description}
              src={item.urlToImage}
              newsUrl={item.url}
            />
          ))
        ) : (
          <div className="col-12 text-center">
            <p className="text-muted">No news articles found for this category.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Newsboard;
    // const fetchNews = async () => {
    //   try {
    //     setLoading(true);
    //     setError(null);
    //     const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_NEWS_API}`;
    //     console.log("Fetching from:", url); // Debug log
        
    //     const response = await fetch(url);
        
    //     if (!response.ok) {
    //       throw new Error(`HTTP error! status: ${response.status}`);
    //     }
        
    //     const data = await response.json();
    //     console.log("API Response:", data); // Debug log
        
    //     if (data.status === "ok") {
    //       setNews(data.articles || []);
    //     } else {
    //       throw new Error(data.message || "Failed to fetch news");
    //     }
    //   } catch (err) {
    //     console.error("Error fetching news:", err);
    //     setError(err.message);
    //     setNews([]);
    //   } finally {
    //     setLoading(false);
    //   }
    // };

    // fetchNews();
  // }, [category]);

//   if (loading) {
//     return (
//       <div className="container my-3 text-center">
//         <div className="spinner-border text-primary" role="status">
//           <span className="visually-hidden">Loading...</span>
//         </div>
//         <p className="mt-2">Loading news...</p>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="container my-3">
//         <div className="alert alert-danger" role="alert">
//           <h4 className="alert-heading">Error Loading News</h4>
//           <p>{error}</p>
//           <hr />
//           <p className="mb-0">Please check your API key and try again.</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="container my-3">
//       <h2 className="text-center">
//         Latest <span className="badge bg-danger">News</span> - {category.charAt(0).toUpperCase() + category.slice(1)}
//       </h2> 
//       <div className="row">
//         {news.length > 0 ? (
//           news.map((item, index) => (
//             <NewsItem
//               key={index}
//               title={item.title}
//               description={item.description}
//               src={item.urlToImage}
//               newsUrl={item.url}
//             />
//           ))
//         ) : (
//           <div className="col-12 text-center">
//             <p className="text-muted">No news articles found for this category.</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Newsboard;