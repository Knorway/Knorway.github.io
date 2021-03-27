import React from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/nightOwl';

export default function CodeHighlight({ children, className }) {
	const language = className?.replace(/language-/, '');
	// console.log(className.replace(/language-/, ''));
	console.log(className);

	return (
		<Highlight {...defaultProps} code={children} language={language} theme={theme}>
			{({ className, style, tokens, getLineProps, getTokenProps }) => (
				<pre className={className} style={{ ...style, padding: '20px' }}>
					{tokens.map((line, i) => (
						<div key={i} {...getLineProps({ line, key: i })}>
							{line.map((token, key) => (
								<span key={key} {...getTokenProps({ token, key })} />
							))}
						</div>
					))}
				</pre>
			)}
		</Highlight>
	);
}