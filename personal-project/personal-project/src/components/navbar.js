import '../stylesheets/navbar.css';
import logo from '../images/logo-digitalcare-removebg-preview.png';
import logo1 from '../images/pngegg.png';

export default function main() {
    return (
      <div className="nav">
       <div className="header">
            <div className="logo">
            <img src={logo}/>
            <img src={logo1}/>
            </div> 
            <div className="links">
                <a href='https://stackoverflow.com/questions/58722629/react-import-component-from-another-folder-issue'>Home</a>
                <a href='https://stackoverflow.com/questions/58722629/react-import-component-from-another-folder-issue'>REst</a>
                <a href='https://stackoverflow.com/questions/58722629/react-import-component-from-another-folder-issue'>about</a>
                <a href='https://stackoverflow.com/questions/58722629/react-import-component-from-another-folder-issue'>Fuck</a>
            </div>  
       </div>
      </div>
    );
  }