'use client';
import { CodeBlock } from 'react-code-block/shiki';
import { TokensResult } from 'shiki';

function CodeBlockRenderer({ tokens }: { tokens: TokensResult }) {
    return (
        <CodeBlock tokens={tokens}>
            <CodeBlock.Code className="bg-gray-50 p-6">
                <div className="table-row">
                    <CodeBlock.LineNumber className="table-cell pr-4 text-sm text-gray-500 text-right select-none" />
                    <CodeBlock.LineContent className="table-cell">
                        <CodeBlock.Token />
                    </CodeBlock.LineContent>
                </div>
            </CodeBlock.Code>
        </CodeBlock>
    );
}

export default CodeBlockRenderer;