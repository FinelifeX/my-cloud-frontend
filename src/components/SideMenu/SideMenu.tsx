import * as React from 'react';
import { Button, List } from 'components/shared';

export const SideMenu: React.FC = () => {
  const smt = '';

  return (
    <aside>
      <List>
        <List.Item>
          <Button>
            <i className="fas fa-plus" />
            &nbsp; Upload
          </Button>
        </List.Item>
        <List.Item>
          <Button>
            <i className="fas fa-file-alt" />
            &nbsp; Files
          </Button>
        </List.Item>
        <List.Item>
          <Button>
            <i className="fas fa-image" />
            &nbsp; Images
          </Button>
        </List.Item>
        <List.Item>
          <Button>
            <i className="fas fa-video" />
            &nbsp; Videos
          </Button>
        </List.Item>
      </List>
    </aside>
  );
};
