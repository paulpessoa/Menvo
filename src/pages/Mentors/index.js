import CardMentor from "../../components/CardMentor";
import SidebarMentor from "../../components/SidebarMentor";

function Mentors() {
  return (
    <div className="Mentors">
      <div className="container">
        <div className="sideBar">
          <SidebarMentor/>
        </div>

      
          <div className="feedMentor">
            <CardMentor />
            <CardMentor />
            <CardMentor />
            <CardMentor />
            <CardMentor />
            <CardMentor />
            <CardMentor />
            <CardMentor />
            <CardMentor />
          </div>
        
      
      </div>
    </div>
  );
}

export default Mentors;
