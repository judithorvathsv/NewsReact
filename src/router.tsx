import {
  Route,
  createBrowserRouter,
  createRoutesFromElements 
} from "react-router-dom";
import App from "./App";
import News from "./News";
import New from "./New";
import Register from "./Register";
import Login from "./Login";
import NotFound from "./NotFound";
import Sport from "./Pages/Sport";
import Business from "./Pages/Business";
import Innovation from "./Pages/Innovation";
import Culture from "./Pages/Culture";
import Arts from "./Pages/Arts";
import Travel from "./Pages/Travel";
import Earth from "./Pages/Earth";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<App />} path="/">
      <Route path="/news/:id" element={<New urlToImage={""} title={""} content={""} publishedAt={""} topic={""} />} />
      <Route path="/news" element={<News />} />
      <Route path="/" element={<News />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />

      <Route path="/news/Home" element={<News />} />
      <Route path="/news/News" element={<News />} />
      <Route path="/news/Sport" element={<Sport />} />
      <Route path="/news/Business" element={<Business />} />
      <Route path="/news/Innovation" element={<Innovation />} />
      <Route path="/news/Culture" element={<Culture />} />
      <Route path="/news/Arts" element={<Arts />} />
      <Route path="/news/Travel" element={<Travel />} />
      <Route path="/news/Earth" element={<Earth />} />

      <Route path="*" element={<NotFound />} />
    </Route>
  )
);
