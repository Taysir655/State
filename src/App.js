import React, { Component } from 'react';

class App extends Component {
  state = {
    person: {
      fullName: "Mark Elliot Zuckerberg",
      bio: "CEO, founder and president of Facebook.",
      imgSrc: "https://img.jagranjosh.com/imported/images/E/GK/mark-zuckerberg-biography%20(1).jpg",
      profession: "American business magnate, computer programmer, internet entrepreneur ",
    },
    show: false,
    elapsedTime: 0
  };

  interval = null;

  componentDidMount() {
    this.interval = setInterval(() => {
      if (this.state.show) { // Counter only if show is true
        this.setState(prevState => ({
          elapsedTime: prevState.elapsedTime + 1
        }));
      }
    }, 1000); // Update every 1 second
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  toggleShow = () => {
    if (!this.state.show) { // Reset counter when show changes from false to true
      this.setState({ elapsedTime: 0 });
    }
    this.setState(prevState => ({
      show: !prevState.show
    }));
  };

  render() {
    const { person, show, elapsedTime } = this.state;

    return (
      <div className="App">
        <div className="content">
          {show && (
            <div className='profil1'>
 <div className='profil'>
              <img
                src={person.imgSrc}
                style={{
                  height: '300px',
                  borderRadius: '50%',
                  boxShadow: show ? '2px 6px 10px rgba(255, 255, 255, 255)' : 'none', 
                  margin: '50px',
                }}
                alt="Profile"
              />
  <div >
                  <h1 style={{ color: 'brown' }}>{person.fullName}</h1>
              <p>{person.bio}</p>
              <p>{person.profession}</p>
             

                </div>
            
            </div>
            <button   style={{
    
    color: 'brown',// Text color
    fontWeight:'blod',
    border: 'gray', // Remove border
    padding: '10px 20px',
    borderRadius: '15px', // Added the rounded border
    cursor: 'pointer',
    boxShadow: '0 4px 8px rgba(255, 0, 0, 0.2)' // Adding shadow
  }}> ⏰ Time:{elapsedTime} Seconds</button>
            
            </div>
           
          )}
          <button    style={{
color: 'brown',
fontWeight:'bold',
              border: 'gray', // Remove border
              padding: '10px 30px', // Padding
              borderRadius: '50px', // Border radius
              cursor: 'pointer', // Cursor style
              boxShadow: '0 4px 8px rgba(255, 0, 0, 0.2)' ,
              marginRight:'10px'
            }}
           
            onClick={this.toggleShow}
          >
            {show ? ' Profile 👨' : 'Show Profile'}
          </button>
        </div>
      </div>
    );
  }
}

export default App;