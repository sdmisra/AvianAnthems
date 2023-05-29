import React, { Component, MouseEvent } from 'react'
import { Link } from 'react-router-dom'
import './Form.css'
import '../../MockData/mock-data.json'

type FormProps = {
  selectedCnt: string,
  selectedType: string,
  fetchResults: (event: MouseEvent<HTMLButtonElement>) => void
}

class Form extends Component<FormProps> {

  render() {
      return (
        
          <form className='dropdown-menu'>
            <label className='continent-label'>
              Continent:
              <select className='country' name='country'>
                <option value="usa">United States</option>
                <option value='africa'>Africa</option>
                <option value='america'>Americas</option>
                <option value='asia'>Asia</option>
                <option value='australia'>Australia</option>
                <option value='europe'>Europe</option>
                <option value='world-wide'>Any Location</option>
              </select>
            </label>
            <label>
                Song Type:
                <select name='song-type'>
                  <option value='calling-song' >Calling Song</option>
                  <option value='courtship-song' >Courtship Song</option>
                  <option value='dawn-song' >Dawn Song</option>
                  <option value='disturbance-song' >Disturbance Song</option>
                  <option value='duet-song' >Duet Song</option>
                  <option value='flight-song'>Flight Song</option>
                  <option value='rivalry-song' >Rivalry Song</option>
                  <option value='all-songs'>Any Song</option>
                </select>
            </label>
            <button 
            className="shrinky-link" 
            onClick={(event) =>{
              this.props.fetchResults(event)
              }}>

            <Link to="/results">
              Search
            </Link>
            </button>

          </form>
  
      )
  }

}

export default Form;