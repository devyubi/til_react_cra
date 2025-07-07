import styled from "@emotion/styled";
import React from "react";

function UsersList({ id, title, body, userid, address }) {
  const UserCard = styled.div`
    background-color: #fff;
    border-radius: 15px;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.5);
    border: 6px solid #ffb703;
    margin: 20px;
    padding: 20px;
    transition: all 0.2s;
    &:hover {
      transform: translateY(-10px);
    }
  `;
  const UserTitle = styled.h2`
    font-size: 20px;
    color: #333;
    margin-bottom: 20px;
  `;
  const UserBody = styled.div`
    font-size: 15px;
    color: #555;
    line-height: 1.6;
    margin-bottom: 10px;
  `;
  const UserCompleted = styled.div``;
  const UserAddress = styled.div`
    margin-top: 10px;
    padding: 8px;
    background: #f5f5f5;
    border-radius: 8px;
    font-size: 14px;
    color: #333;
  `;

  return (
    <UserCard>
      <UserTitle>
        {id}.{title}
      </UserTitle>
      <UserBody>{body}</UserBody>
      <UserCompleted>User: {userid}</UserCompleted>
      <UserAddress>
        <div>
          {address.street}, {address.suite}
        </div>
        <div>
          {address.city}, {address.zipcode}
        </div>
        <div>
          Lat: {address.geo.lat} / Lng: {address.geo.lng}
        </div>
      </UserAddress>
    </UserCard>
  );
}

export default UsersList;
