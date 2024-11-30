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

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<App />} path="/">
      <Route path="/news/:id" element={<New urlToImage={""} title={""} content={""} publishedAt={""} topic={""} />} />
      <Route path="/news" element={<News />} />
      <Route path="/" element={<News />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />

      <Route path="/news/Sport" element={<Sport />} />

      <Route path="*" element={<NotFound />} />
    </Route>
  )
);
