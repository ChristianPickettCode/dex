/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($owner: String!) {
    onCreateUser(owner: $owner) {
      id
      firstName
      lastName
      admin
      lastActive
      createdRooms {
        items {
          id
          name
          group
          accessCode
          createdAt
          owner
        }
        nextToken
      }
      joinedRooms {
        id
        name
        group
        accessCode
        chats {
          nextToken
        }
        users {
          id
          firstName
          lastName
          admin
          lastActive
          createdAt
          owner
        }
        admin {
          id
          firstName
          lastName
          admin
          lastActive
          createdAt
          owner
        }
        moderators {
          id
          firstName
          lastName
          admin
          lastActive
          createdAt
          owner
        }
        createdAt
        owner
      }
      createdAt
      owner
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($owner: String!) {
    onUpdateUser(owner: $owner) {
      id
      firstName
      lastName
      admin
      lastActive
      createdRooms {
        items {
          id
          name
          group
          accessCode
          createdAt
          owner
        }
        nextToken
      }
      joinedRooms {
        id
        name
        group
        accessCode
        chats {
          nextToken
        }
        users {
          id
          firstName
          lastName
          admin
          lastActive
          createdAt
          owner
        }
        admin {
          id
          firstName
          lastName
          admin
          lastActive
          createdAt
          owner
        }
        moderators {
          id
          firstName
          lastName
          admin
          lastActive
          createdAt
          owner
        }
        createdAt
        owner
      }
      createdAt
      owner
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($owner: String!) {
    onDeleteUser(owner: $owner) {
      id
      firstName
      lastName
      admin
      lastActive
      createdRooms {
        items {
          id
          name
          group
          accessCode
          createdAt
          owner
        }
        nextToken
      }
      joinedRooms {
        id
        name
        group
        accessCode
        chats {
          nextToken
        }
        users {
          id
          firstName
          lastName
          admin
          lastActive
          createdAt
          owner
        }
        admin {
          id
          firstName
          lastName
          admin
          lastActive
          createdAt
          owner
        }
        moderators {
          id
          firstName
          lastName
          admin
          lastActive
          createdAt
          owner
        }
        createdAt
        owner
      }
      createdAt
      owner
    }
  }
`;
export const onCreateRoom = /* GraphQL */ `
  subscription OnCreateRoom($owner: String!) {
    onCreateRoom(owner: $owner) {
      id
      name
      group
      accessCode
      chats {
        items {
          id
          createdAt
          owner
        }
        nextToken
      }
      users {
        id
        firstName
        lastName
        admin
        lastActive
        createdRooms {
          nextToken
        }
        joinedRooms {
          id
          name
          group
          accessCode
          createdAt
          owner
        }
        createdAt
        owner
      }
      admin {
        id
        firstName
        lastName
        admin
        lastActive
        createdRooms {
          nextToken
        }
        joinedRooms {
          id
          name
          group
          accessCode
          createdAt
          owner
        }
        createdAt
        owner
      }
      moderators {
        id
        firstName
        lastName
        admin
        lastActive
        createdRooms {
          nextToken
        }
        joinedRooms {
          id
          name
          group
          accessCode
          createdAt
          owner
        }
        createdAt
        owner
      }
      createdAt
      owner
    }
  }
`;
export const onUpdateRoom = /* GraphQL */ `
  subscription OnUpdateRoom($owner: String!) {
    onUpdateRoom(owner: $owner) {
      id
      name
      group
      accessCode
      chats {
        items {
          id
          createdAt
          owner
        }
        nextToken
      }
      users {
        id
        firstName
        lastName
        admin
        lastActive
        createdRooms {
          nextToken
        }
        joinedRooms {
          id
          name
          group
          accessCode
          createdAt
          owner
        }
        createdAt
        owner
      }
      admin {
        id
        firstName
        lastName
        admin
        lastActive
        createdRooms {
          nextToken
        }
        joinedRooms {
          id
          name
          group
          accessCode
          createdAt
          owner
        }
        createdAt
        owner
      }
      moderators {
        id
        firstName
        lastName
        admin
        lastActive
        createdRooms {
          nextToken
        }
        joinedRooms {
          id
          name
          group
          accessCode
          createdAt
          owner
        }
        createdAt
        owner
      }
      createdAt
      owner
    }
  }
`;
export const onDeleteRoom = /* GraphQL */ `
  subscription OnDeleteRoom($owner: String!) {
    onDeleteRoom(owner: $owner) {
      id
      name
      group
      accessCode
      chats {
        items {
          id
          createdAt
          owner
        }
        nextToken
      }
      users {
        id
        firstName
        lastName
        admin
        lastActive
        createdRooms {
          nextToken
        }
        joinedRooms {
          id
          name
          group
          accessCode
          createdAt
          owner
        }
        createdAt
        owner
      }
      admin {
        id
        firstName
        lastName
        admin
        lastActive
        createdRooms {
          nextToken
        }
        joinedRooms {
          id
          name
          group
          accessCode
          createdAt
          owner
        }
        createdAt
        owner
      }
      moderators {
        id
        firstName
        lastName
        admin
        lastActive
        createdRooms {
          nextToken
        }
        joinedRooms {
          id
          name
          group
          accessCode
          createdAt
          owner
        }
        createdAt
        owner
      }
      createdAt
      owner
    }
  }
`;
export const onCreateChat = /* GraphQL */ `
  subscription OnCreateChat($owner: String!) {
    onCreateChat(owner: $owner) {
      id
      room {
        id
        name
        group
        accessCode
        chats {
          nextToken
        }
        users {
          id
          firstName
          lastName
          admin
          lastActive
          createdAt
          owner
        }
        admin {
          id
          firstName
          lastName
          admin
          lastActive
          createdAt
          owner
        }
        moderators {
          id
          firstName
          lastName
          admin
          lastActive
          createdAt
          owner
        }
        createdAt
        owner
      }
      messages {
        items {
          id
          createdAt
          owner
        }
        nextToken
      }
      createdAt
      owner
    }
  }
`;
export const onUpdateChat = /* GraphQL */ `
  subscription OnUpdateChat($owner: String!) {
    onUpdateChat(owner: $owner) {
      id
      room {
        id
        name
        group
        accessCode
        chats {
          nextToken
        }
        users {
          id
          firstName
          lastName
          admin
          lastActive
          createdAt
          owner
        }
        admin {
          id
          firstName
          lastName
          admin
          lastActive
          createdAt
          owner
        }
        moderators {
          id
          firstName
          lastName
          admin
          lastActive
          createdAt
          owner
        }
        createdAt
        owner
      }
      messages {
        items {
          id
          createdAt
          owner
        }
        nextToken
      }
      createdAt
      owner
    }
  }
`;
export const onDeleteChat = /* GraphQL */ `
  subscription OnDeleteChat($owner: String!) {
    onDeleteChat(owner: $owner) {
      id
      room {
        id
        name
        group
        accessCode
        chats {
          nextToken
        }
        users {
          id
          firstName
          lastName
          admin
          lastActive
          createdAt
          owner
        }
        admin {
          id
          firstName
          lastName
          admin
          lastActive
          createdAt
          owner
        }
        moderators {
          id
          firstName
          lastName
          admin
          lastActive
          createdAt
          owner
        }
        createdAt
        owner
      }
      messages {
        items {
          id
          createdAt
          owner
        }
        nextToken
      }
      createdAt
      owner
    }
  }
`;
export const onCreateMessage = /* GraphQL */ `
  subscription OnCreateMessage($owner: String!) {
    onCreateMessage(owner: $owner) {
      id
      user {
        id
        firstName
        lastName
        admin
        lastActive
        createdRooms {
          nextToken
        }
        joinedRooms {
          id
          name
          group
          accessCode
          createdAt
          owner
        }
        createdAt
        owner
      }
      chat {
        id
        room {
          id
          name
          group
          accessCode
          createdAt
          owner
        }
        messages {
          nextToken
        }
        createdAt
        owner
      }
      createdAt
      owner
    }
  }
`;
export const onUpdateMessage = /* GraphQL */ `
  subscription OnUpdateMessage($owner: String!) {
    onUpdateMessage(owner: $owner) {
      id
      user {
        id
        firstName
        lastName
        admin
        lastActive
        createdRooms {
          nextToken
        }
        joinedRooms {
          id
          name
          group
          accessCode
          createdAt
          owner
        }
        createdAt
        owner
      }
      chat {
        id
        room {
          id
          name
          group
          accessCode
          createdAt
          owner
        }
        messages {
          nextToken
        }
        createdAt
        owner
      }
      createdAt
      owner
    }
  }
`;
export const onDeleteMessage = /* GraphQL */ `
  subscription OnDeleteMessage($owner: String!) {
    onDeleteMessage(owner: $owner) {
      id
      user {
        id
        firstName
        lastName
        admin
        lastActive
        createdRooms {
          nextToken
        }
        joinedRooms {
          id
          name
          group
          accessCode
          createdAt
          owner
        }
        createdAt
        owner
      }
      chat {
        id
        room {
          id
          name
          group
          accessCode
          createdAt
          owner
        }
        messages {
          nextToken
        }
        createdAt
        owner
      }
      createdAt
      owner
    }
  }
`;
