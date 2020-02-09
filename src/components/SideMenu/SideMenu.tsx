import * as React from "react";
import { Button, List } from "components/shared";
import { navigate } from "@reach/router";
import { SideMenuWrapper } from "./styles";

export const SideMenu: React.FC = () => {
  const redirect = (route: string) => {
    navigate(route);
  };

  return (
    <SideMenuWrapper>
      <List>
        <List.Item>
          <Button
            onClick={() => {
              redirect("/upload");
            }}
          >
            <i className="fas fa-plus" />
            &nbsp; Upload
          </Button>
        </List.Item>
        <List.Item>
          <Button
            onClick={() => {
              redirect("/files");
            }}
          >
            <i className="fas fa-file-alt" />
            &nbsp; Files
          </Button>
        </List.Item>
        <List.Item>
          <Button
            onClick={() => {
              redirect("/photos");
            }}
          >
            <i className="fas fa-image" />
            &nbsp; Photos
          </Button>
        </List.Item>
        <List.Item>
          <Button
            onClick={() => {
              redirect("/videos");
            }}
          >
            <i className="fas fa-video" />
            &nbsp; Videos
          </Button>
        </List.Item>
      </List>
    </SideMenuWrapper>
  );
};
