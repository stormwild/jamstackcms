/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPost = /* GraphQL */ `
  mutation CreatePost($input: CreatePostInput!) {
    createPost(input: $input) {
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
export const updatePost = /* GraphQL */ `
  mutation UpdatePost($input: UpdatePostInput!) {
    updatePost(input: $input) {
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
export const deletePost = /* GraphQL */ `
  mutation DeletePost($input: DeletePostInput!) {
    deletePost(input: $input) {
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
export const createComment = /* GraphQL */ `
  mutation CreateComment($input: CreateCommentInput!) {
    createComment(input: $input) {
      id
      message
      createdBy
      createdAt
    }
  }
`;
export const updateComment = /* GraphQL */ `
  mutation UpdateComment($input: UpdateCommentInput!) {
    updateComment(input: $input) {
      id
      message
      createdBy
      createdAt
    }
  }
`;
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment($input: DeleteCommentInput!) {
    deleteComment(input: $input) {
      id
      message
      createdBy
      createdAt
    }
  }
`;
export const createSettings = /* GraphQL */ `
  mutation CreateSettings($input: CreateSettingsInput!) {
    createSettings(input: $input) {
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
export const updateSettings = /* GraphQL */ `
  mutation UpdateSettings($input: UpdateSettingsInput!) {
    updateSettings(input: $input) {
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
export const deleteSettings = /* GraphQL */ `
  mutation DeleteSettings($input: DeleteSettingsInput!) {
    deleteSettings(input: $input) {
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
export const createPreview = /* GraphQL */ `
  mutation CreatePreview($input: CreatePreviewInput!) {
    createPreview(input: $input) {
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
export const updatePreview = /* GraphQL */ `
  mutation UpdatePreview($input: UpdatePreviewInput!) {
    updatePreview(input: $input) {
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
export const deletePreview = /* GraphQL */ `
  mutation DeletePreview($input: DeletePreviewInput!) {
    deletePreview(input: $input) {
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
export const createPage = /* GraphQL */ `
  mutation CreatePage($input: CreatePageInput!) {
    createPage(input: $input) {
      id
      name
      slug
      content
      components
      published
    }
  }
`;
export const updatePage = /* GraphQL */ `
  mutation UpdatePage($input: UpdatePageInput!) {
    updatePage(input: $input) {
      id
      name
      slug
      content
      components
      published
    }
  }
`;
export const deletePage = /* GraphQL */ `
  mutation DeletePage($input: DeletePageInput!) {
    deletePage(input: $input) {
      id
      name
      slug
      content
      components
      published
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser($input: CreateUserInput!) {
    createUser(input: $input) {
      id
      name
      username
      avatarUrl
      owner
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser($input: UpdateUserInput!) {
    updateUser(input: $input) {
      id
      name
      username
      avatarUrl
      owner
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser($input: DeleteUserInput!) {
    deleteUser(input: $input) {
      id
      name
      username
      avatarUrl
      owner
    }
  }
`;
