import { WebContainer } from '@webcontainer/api';

// Call only once

let _webcontainerPromise: Promise<WebContainer>

export async function useWebContainer() {
  if (!_webcontainerPromise)
    _webcontainerPromise = WebContainer.boot()
  return await _webcontainerPromise
}
