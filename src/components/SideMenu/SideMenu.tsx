import * as React from 'react';
import { Button } from 'components/shared';
import { List, ListItem } from './components';

export const SideMenu: React.FC = (props) => {
  const smt = '';

  return (
    <aside>
      <List>
        <ListItem>
          <Button>
            <i className="fas fa-plus" />
            &nbsp; Upload
          </Button>
        </ListItem>
        <ListItem>
          <Button>
            <i className="fas fa-file-alt" />
            &nbsp; Files
          </Button>
        </ListItem>
        <ListItem>
          <Button>
            <i className="fas fa-image" />
            &nbsp; Images
          </Button>
        </ListItem>
        <ListItem>
          <Button>
            <i className="fas fa-video" />
            &nbsp; Videos
          </Button>
        </ListItem>
      </List>
    </aside>
  );
};
