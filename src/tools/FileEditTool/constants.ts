// In its own file to avoid circular dependencies
export const FILE_EDIT_TOOL_NAME = 'Edit'

// Permission pattern for granting session-level access to the project's .omnicode/ folder
export const OMNICODE_FOLDER_PERMISSION_PATTERN = '/.omnicode/**'

// Permission pattern for granting session-level access to the global ~/.omnicode/ folder
export const GLOBAL_OMNICODE_FOLDER_PERMISSION_PATTERN = '~/.omnicode/**'

export const FILE_UNEXPECTEDLY_MODIFIED_ERROR =
  'File has been unexpectedly modified. Read it again before attempting to write it.'
