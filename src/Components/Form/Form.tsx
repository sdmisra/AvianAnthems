import React, { Component } from 'react'
import './Form.css'

class Form extends Component {




  render() {
      return (
        
          <form className='dropdown-menu'>
            <label className='continent-label'>
              Continent:
              <select name='continent'>
                <option value='africa'>Africa</option>
                <option value='america'>Americas</option>
                <option value='asia'>Asia</option>
                <option value='australia'>Australia</option>
                <option value='europe'>Europe</option>
                <option value='world-wide'>World Wide</option>
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
                  <option value='fight-song'>Fight Song</option>
                  <option value='rivalry-song' >Rivalry Song</option>
                  <option value='all-songs'>All Songs</option>
                </select>
            </label>
            <button>Search</button>
          </form>
        

      )
  }


}

export default Form;