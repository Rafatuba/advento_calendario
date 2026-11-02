import { Button, Dropdown, Header, Label } from "@heroui/react";
import { ListIcon } from "@phosphor-icons/react";
import { useNavigate } from "react-router";
import { adventos } from "../../data/adventos";

export function DropdownMenu() {
  const navigate = useNavigate();

  return (
    <Dropdown className="text-success">
      <Button
        aria-label="Menu"
        className="fixed top-4 left-4 z-50 bg-success text-secondary hover:bg-secondary/80"
      >
        <ListIcon size={32} />
      </Button>

      <Dropdown.Popover className="bg-success">
        <Dropdown.Menu onAction={(key) => navigate(`/advento/${key}`)}>
          <Header className="text-secondary">Todos os dias</Header>
          {adventos.map((advento) => (
            <Dropdown.Item
              key={advento.id}
              id={String(advento.id)}
              textValue={`${advento.id} DEZ`}
            >
              <Label className="text-secondary">{advento.id} DEZ</Label>
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown.Popover>
    </Dropdown>
  );
}
