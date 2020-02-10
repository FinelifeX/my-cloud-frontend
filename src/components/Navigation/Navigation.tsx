import * as React from "react";
import { ListItem } from "components/shared";
import { NavigationWrapper, NavList, NavButton } from "./styles";

export const Navigation: React.FC = () => {
  return (
    <NavigationWrapper>
      <NavList>
        <ListItem>
          <NavButton to="/upload">
            <i className="fas fa-plus" />
            &nbsp; Upload
          </NavButton>
        </ListItem>
        <ListItem>
          <NavButton to="/files">
            <i className="fas fa-file-alt" />
            &nbsp; Files
          </NavButton>
        </ListItem>
        <ListItem>
          <NavButton to="/photos">
            <i className="fas fa-image" />
            &nbsp; Photos
          </NavButton>
        </ListItem>
        <ListItem>
          <NavButton to="/videos">
            <i className="fas fa-video" />
            &nbsp; Videos
          </NavButton>
        </ListItem>
      </NavList>
    </NavigationWrapper>
  );
};