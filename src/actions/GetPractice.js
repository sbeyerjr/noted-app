import React from 'react';
import axios from 'axios';

class Practice extends React.Component {
    // State will apply to the practices object which is set to loading by default
    state = {
      practices: [],
      isLoading: true,
      errors: null
    };
    // Now we're going to make a request for data using axios
    getPractices() {
      axios
        // This is where the data is hosted
        .get("https://s3-us-west-2.amazonaws.com/s.cdpn.io/3/practices.json", {
            headers: {
                Authorization: `Bearer ${authToken}`}
        }) 
        // Once we get a response and store data, let's change the loading state
        .then(response => {
          this.setState({
            practices: response.data.practices,
            isLoading: false
          });
        })
        // If we catch any errors connecting, let's update accordingly
        .catch(error => this.setState({ error, isLoading: false }));
    }
    // Let's our app know we're ready to render the data
    componentDidMount() {
      this.getPractices();
    }
    // Putting that data to use
    render() {
      const { isLoading, practices } = this.state;
      return (
        <React.Fragment>
          <h2>Random Practice</h2>
          <div>
            {!isLoading ? (
              practices.map(practice => {
                const { _id, date } = practice;
                return (
                  <div key={_id}>
                    <h2>{date}</h2>
                    
                    <hr />
                  </div>
                );
              })
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </React.Fragment>
      );
    }
  }