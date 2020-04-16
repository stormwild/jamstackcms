/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost {
    onCreatePost {
      id
      title
      description
      content
      cover_image
      createdAt
      published
      previewEnabled
      categories
      contentType
      author {
        id
        name
        username
        avatarUrl
        owner
      }
    }
  }
`;
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost {
    onUpdatePost {
      id
      title
      description
      content
      cover_image
      createdAt
      published
      previewEnabled
      categories
      contentType
      author {
        id
        name
        username
        avatarUrl
        owner
      }
    }
  }
`;
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost {
    onDeletePost {
      id
      title
      description
      content
      cover_image
      createdAt
      published
      previewEnabled
      categories
      contentType
      author {
        id
        name
        username
        avatarUrl
        owner
      }
    }
  }
`;
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment($createdBy: String) {
    onCreateComment(createdBy: $createdBy) {
      id
      message
      createdBy
      createdAt
    }
  }
`;
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment($createdBy: String) {
    onUpdateComment(createdBy: $createdBy) {
      id
      message
      createdBy
      createdAt
    }
  }
`;
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment($createdBy: String) {
    onDeleteComment(createdBy: $createdBy) {
      id
      message
      createdBy
      createdAt
    }
  }
`;
export const onCreateSettings = /* GraphQL */ `
  subscription OnCreateSettings {
    onCreateSettings {
      id
      categories
      adminGroups
      theme
      border
      borderWidth
      description
    }
  }
`;
export const onUpdateSettings = /* GraphQL */ `
  subscription OnUpdateSettings {
    onUpdateSettings {
      id
      categories
      adminGroups
      theme
      border
      borderWidth
      description
    }
  }
`;
export const onDeleteSettings = /* GraphQL */ `
  subscription OnDeleteSettings {
    onDeleteSettings {
      id
      categories
      adminGroups
      theme
      border
      borderWidth
      description
    }
  }
`;
export const onCreatePreview = /* GraphQL */ `
  subscription OnCreatePreview {
    onCreatePreview {
      id
      title
      description
      content
      cover_image
      createdAt
      categories
    }
  }
`;
export const onUpdatePreview = /* GraphQL */ `
  subscription OnUpdatePreview {
    onUpdatePreview {
      id
      title
      description
      content
      cover_image
      createdAt
      categories
    }
  }
`;
export const onDeletePreview = /* GraphQL */ `
  subscription OnDeletePreview {
    onDeletePreview {
      id
      title
      description
      content
      cover_image
      createdAt
      categories
    }
  }
`;
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($owner: String) {
    onCreateUser(owner: $owner) {
      id
      name
      username
      avatarUrl
      owner
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($owner: String) {
    onUpdateUser(owner: $owner) {
      id
      name
      username
      avatarUrl
      owner
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($owner: String) {
    onDeleteUser(owner: $owner) {
      id
      name
      username
      avatarUrl
      owner
    }
  }
`;
