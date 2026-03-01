import React, { useState } from "react";
import styled from "styled-components";

const Searchbar = ({ placeholder = "Search...", onSearch }) => {
  const [query, setQuery] = useState("");

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      onSearch?.(query); 
    }
  };

  return (
    <Wrapper>
      <Input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyPress}
        placeholder={placeholder}
      />
    </Wrapper>
  );
};

export default Searchbar;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Input = styled.input`
  width: 100%;
  max-width: 400px;
  padding: 1rem 1.5rem;
  border-radius: 1rem;
  border: 1px solid #93c5fd;
  background-color: #f0f9ff;
  font-size: 16px;
  outline: none;
  box-shadow: 0 10px 15px -3px rgba(59, 130, 246, 0.5);
  transition: all 0.15s ease;

  &:focus {
    border-color: #3b82f6;
    box-shadow: 0 10px 15px -3px rgba(59, 130, 246, 0.7);
  }
`;