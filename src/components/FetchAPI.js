import React, { Component } from 'react'

const url = 'http://localhost:3000'

const body = {
  'Request_id': '7a6b8835-b8db-4413-a9f4-115c1ebe7b7c',
  'ClubId': '5f6c4a6b-3bed-11e8-8115-000c297e508b',
  'Method': 'getSchedule',
  'Parameters': {
    'StartDate': '2018-04-01 00:00',
    'EndDate': '2018-05-17 00:00'
  }
}

class FetchAPI extends Component {
  state = {
    data: {} 
  }

  async componentDidMount() {
      const res = await fetch(url, {
        method: "POST",
        headers: new Headers({
          'Authorization': 'Basic '+btoa('raoffonom@icloud.com:HelloWorld'), 
          "Content-Type": "application/json",
        }),

        body: JSON.stringify(body)
      })

      const data = await res.json()
      console.log('data', data)
  }

  render() {
    return (
      <div>
        <p>FetchAPI</p>
      </div>
    )
  }
}

export default  FetchAPI 
