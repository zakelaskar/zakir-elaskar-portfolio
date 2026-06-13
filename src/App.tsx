import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { ExperienceDetail } from "./pages/ExperienceDetail";
import { ExperiencePage } from "./pages/ExperiencePage";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { ProjectDetail } from "./pages/ProjectDetail";
import { Projects } from "./pages/Projects";
import { Research } from "./pages/Research";
import { Resume } from "./pages/Resume";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="projects" element={<Projects />} />
        <Route path="projects/:slug" element={<ProjectDetail />} />
        <Route path="experience" element={<ExperiencePage />} />
        <Route path="experience/:slug" element={<ExperienceDetail />} />
        <Route path="research" element={<Research />} />
        <Route path="resume" element={<Resume />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
