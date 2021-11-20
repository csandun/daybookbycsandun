import styled from "@emotion/styled"
import React from "react"
import tw from "twin.macro"

const ToC = ({ headings }) => (
    <Toc>
        <Title>Table of contents</Title>
        <InnerScroll>
            {headings.map(heading => {
                if (heading.depth > 4) {
                    return <div />
                }

                return (
                    <ToCElement key={heading.value}>
                        <ToCLink
                            href={`#${heading.value.replace(/\s+/g, "-").toLowerCase()}`}
                        >
                            {heading.value}
                        </ToCLink>
                    </ToCElement>
                )
            })}
        </InnerScroll>
    </Toc>
)

const Toc = styled.ul`
  ${tw`bg-white fixed hidden lg:flex flex-col rounded p-3 my-3`};
  width: 40rem;
  left: calc(60% + 300px);
  top: 150px;
  max-height: 50vh;
  background-color: #fafafa;
  margin: 20px;
`

const Title = tw.h2`text-2xl mb-5`

const ToCElement = tw.li`p-1 leading-5 ml-4 mb-5 mr-4 leading-3 list-none`

const ToCLink = tw.a`hover:text-black transition duration-300 no-underline`

const InnerScroll = styled.div`
  scrollbar-width: thin;
  scrollbar-color: #367ee9 rgba(48, 113, 209, 0.3);
  overflow: hidden auto;
`

export default ToC