import RoomService from '@roomservice/browser'

export default function (ctx, inject) {
  const client = new RoomService({
    authUrl: window.location.origin + '/api/roomservice'
  })
  inject('roomService', client)
}
