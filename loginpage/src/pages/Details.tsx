    import { useNavigate, useParams } from "react-router-dom";
import demoData from "../json/data.json";

const DetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const item = demoData.find((data) => data.id === Number(id));

  if (!item) {
    return <h2 className="p-5 text-red-500">Item Not Found</h2>;
  }

  const handleBack = () =>{
    navigate(-1)
  }

  return (
    <>
    <div className="m-3">
      <button className="cursor-pointer w-auto px-4 py-2 text-white uppercase bg-blue-500 hover:bg-gray-500 rounded-lg" onClick={handleBack}>Back</button>
    </div>
    
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">
      <div className="bg-white rounded-2xl shadow-lg max-w-lg w-full overflow-hidden">
        <img
          src={item.img}
          alt={item.heading}
          className="w-full h-64 object-cover"
        />

        <div className="p-6">
          <h2 className="text-2xl font-bold mb-3">{item.heading}</h2>
          <p className="text-gray-600">{item.desc}</p>
        </div>
      </div>
    </div>
    </>
  );
};

export default DetailsPage;