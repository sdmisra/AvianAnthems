import React, { Component } from 'react'
import './Form.css'
import '../../MockData/mock-data.json'

type FormProps = {
  selected: string,
  findRecording: () => MouseEvent
}

class Form extends Component<FormProps> {
  // state = {
  //   continent: 
  // }
  
  // const dropdownCountry = document.getElementsByClassName(".country") as HTMLSelectElement

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
            <button onClick={() =>  {this.props.findRecording()}}>Search</button>
          </form>
  
      )
  }

}

export default Form;