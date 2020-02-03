import express from 'express'
import bodyParser from 'body-parser'
import RoomService from '@roomservice/node'

const app = express()

// Implement your own accounts here!
function isLoggedIn() {
  return true
}

// POST /api/roomservice
app.post('/', bodyParser.json(), function (req, res) {
  const client = new RoomService(process.env.ROOM_SERVICE_SECRET)
  const { room } = client.parse(req.body)

  if (!isLoggedIn()) {
    return client.reject()
  }

  // Otherwise let them in.
  return client.authorize(res, {
    guest: 'user-id-goes-here',
    room: room.reference
  })
})

export default {
  path: '/api/roomservice',
  handler: app
}
