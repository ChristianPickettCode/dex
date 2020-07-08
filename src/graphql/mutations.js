/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createRoom = /* GraphQL */ `
  mutation CreateRoom(
    $input: CreateRoomInput!
    $condition: ModelRoomConditionInput
  ) {
    createRoom(input: $input, condition: $condition) {
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
export const updateRoom = /* GraphQL */ `
  mutation UpdateRoom(
    $input: UpdateRoomInput!
    $condition: ModelRoomConditionInput
  ) {
    updateRoom(input: $input, condition: $condition) {
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
export const deleteRoom = /* GraphQL */ `
  mutation DeleteRoom(
    $input: DeleteRoomInput!
    $condition: ModelRoomConditionInput
  ) {
    deleteRoom(input: $input, condition: $condition) {
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
export const createChat = /* GraphQL */ `
  mutation CreateChat(
    $input: CreateChatInput!
    $condition: ModelChatConditionInput
  ) {
    createChat(input: $input, condition: $condition) {
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
export const updateChat = /* GraphQL */ `
  mutation UpdateChat(
    $input: UpdateChatInput!
    $condition: ModelChatConditionInput
  ) {
    updateChat(input: $input, condition: $condition) {
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
export const deleteChat = /* GraphQL */ `
  mutation DeleteChat(
    $input: DeleteChatInput!
    $condition: ModelChatConditionInput
  ) {
    deleteChat(input: $input, condition: $condition) {
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
export const createMessage = /* GraphQL */ `
  mutation CreateMessage(
    $input: CreateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    createMessage(input: $input, condition: $condition) {
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
export const updateMessage = /* GraphQL */ `
  mutation UpdateMessage(
    $input: UpdateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    updateMessage(input: $input, condition: $condition) {
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
export const deleteMessage = /* GraphQL */ `
  mutation DeleteMessage(
    $input: DeleteMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    deleteMessage(input: $input, condition: $condition) {
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
