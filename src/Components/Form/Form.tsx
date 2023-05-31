import React, { Component, MouseEvent } from 'react'
import { Link } from 'react-router-dom'
import './Form.css'

type FormProps = {
  selectedCnt: string,
  selectedType: string,
  fetchResults: (event: MouseEvent<HTMLButtonElement>, formState: {selectedCnt : string, selectedType : string}) => void
}

type FormState = {
  selectedCnt: string
  selectedType: string
}

class Form extends Component<FormProps, FormState> {
  state = {
    selectedCnt: 'United States',
    selectedType: 'drumming'
  }

  // handleChange = (event: any) => {
  //   console.log(event.target.name)
  //   console.log(event.target.value)
  //   if (event.target.name === 'country') {
  //     console.log(this.state)
  //   } else {
  //     console.log(this.state)
  //   }
  // }

  render() {
      return (
          <form className='dropdown-menu'>
            <label className='country-label'>
              Country:
              <select className='country' name='country' onChange={event => this.setState({selectedCnt : event.target.value})}>
                <option value="United States">United States</option>
                <option value='canada'>Canada</option>
                <option value='mexico'>Mexico</option>
              </select>
            </label>
            <label>
                Song Type:
                <select className='song-type' name='song-type' onChange={event => this.setState({selectedType : event.target.value})}>
                  <option value='drumming' >Drumming</option>
                  <option value='alarm-call' >Alarm Call</option>
                  <option value='flight-call'>Flight Call</option>
                  {/* <option value='all-songs'>Any Song</option> */}
                </select>
            </label>
            <button 
            className="shrinky-link" 
            onClick={(event) =>{
              console.log(this.state)
              this.props.fetchResults(event, this.state)
              }}>
            <Link to="/results" className="link-style">
              Search
            </Link>
            </button>

          </form>
  
      )
  }

}

export default Form;