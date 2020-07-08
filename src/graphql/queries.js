/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getRoom = /* GraphQL */ `
  query GetRoom($id: ID!) {
    getRoom(id: $id) {
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
export const listRooms = /* GraphQL */ `
  query ListRooms(
    $filter: ModelRoomFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRooms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getChat = /* GraphQL */ `
  query GetChat($id: ID!) {
    getChat(id: $id) {
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
export const listChats = /* GraphQL */ `
  query ListChats(
    $filter: ModelChatFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listChats(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getMessage = /* GraphQL */ `
  query GetMessage($id: ID!) {
    getMessage(id: $id) {
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
export const listMessages = /* GraphQL */ `
  query ListMessages(
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        user {
          id
          firstName
          lastName
          admin
          lastActive
          createdAt
          owner
        }
        chat {
          id
          createdAt
          owner
        }
        createdAt
        owner
      }
      nextToken
    }
  }
`;
