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
    selectedType: 'flight-call'
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
                <option value='gambia'>Gambia</option>
                <option value='ethiopia'>Ethiopia</option>
                <option value='spain'>Spain</option>
                <option value='papua new guinea'>Papua New Guinea</option>
                <option value='vietnam'>Vietnam</option>
                <option value='romania'>Romania</option>
                <option value='jamaica'>Jamaica</option>
                <option value='japan'>Japan</option>
              </select>
            </label>
            <label>
                Song Type:
                <select className='song-type' name='song-type' onChange={event => this.setState({selectedType : event.target.value})}>
                  <option value='flight-call'>Flight Call</option>
                  <option value='alarm-call' >Alarm Call</option>
                  <option value='call'>Common Call</option>
                  {/* <option value='drumming' >Drumming</option> */}
                  {/* <option value='all-songs'>Any Song</option> */}
                </select>
            </label>
            <button 
            className="shrinky-link" 
            data-cy="search"
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