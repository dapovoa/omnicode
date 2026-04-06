export type File = {
  fileId: string
  relativePath: string
}

export type FilesApiConfig = {
  oauthToken: string
  baseUrl?: string
  sessionId: string
}

export type DownloadResult = {
  fileId: string
  path: string
  success: boolean
  error?: string
  bytesWritten?: number
}

export function downloadSessionFiles(
  _config: FilesApiConfig,
  _files: File[],
): Promise<Map<string, DownloadResult>> {
  return Promise.resolve(new Map())
}

export function uploadFile(
  _config: FilesApiConfig,
  _localPath: string,
  _remotePath: string,
): Promise<{ success: boolean; error?: string }> {
  return Promise.resolve({ success: true })
}

export function uploadSessionFiles(
  _config: FilesApiConfig,
  _files: File[],
): Promise<Map<string, { success: boolean; error?: string }>> {
  return Promise.resolve(new Map())
}

export function parseFileSpecs(_specs: string[]): File[] {
  return []
}
