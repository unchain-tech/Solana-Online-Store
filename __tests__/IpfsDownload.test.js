import { render, screen } from '@testing-library/react';

import IPFSDownload from '../components/IpfsDownload';
import useIPFS from '../hooks/useIPFS';

jest.mock('../hooks/useIPFS');

describe('IPFSDownload', () => {
  it('should render download button with correct link', () => {
    /** 準備 */
    /** IPFSDownloadコンポーネントに渡す引数と、useIPFSフックの戻り値を定義します */
    const mockHash = 'hash';
    const mockFilename = 'filename';
    const mockFile = `https://gateway.ipfscdn.io/ipfs/${mockHash}?filename=${mockFilename}`;
    useIPFS.mockReturnValue(mockFile);

    /** 実行 */
    render(<IPFSDownload hash={mockHash} filename={mockFilename} />);

    /** 確認 */
    const linkElement = screen.getByRole('link', {
      name: /Download/i,
    });
    /** useIPFSフックが呼び出され、ダウンロードリンクが適切に表示されていることを確認します */
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', mockFile);
    expect(linkElement).toHaveAttribute('download', mockFilename);
  });
});
