import "./services.styles.css";
import { services } from "../../data";
import Title from "../Title/title.component";
import Service from "../Service/service.component";
const Services = () => {
  return (
    <section className="section services" id="services">
      <Title title="our" subTitle="services" />

      <div className="section-center services-center">
        {services.map((service) => {
          return <Service {...service} key={service.id} />;
        })}
      </div>
    </section>
  );
};
export default Services;
