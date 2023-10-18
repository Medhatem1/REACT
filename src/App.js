import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Login Form</title>
</head>
<h1>fill out this form</h1>
<div className="body">
 
  <label htmlFor="name">First Name</label><input type="text" />
  <label htmlFor="name">Last Name</label><input type="text" />
  <label htmlFor="email">Email adress</label><input type="email" />
  <label htmlFor="number">phone number</label><input type="text" />
  <textarea name="message" id="" cols="30" rows="8" placeholder="Write your message..."></textarea>
  <input type="submit" className="sub"></input>
</div>
</html>
  );
}

export default App;
