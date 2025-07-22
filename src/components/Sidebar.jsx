import SidebarButton from './SidebarButton';

const Siderbar = () => {
  return (
    <div className="h-screen w-64 bg-white">
      <div className="py-06 space-y-4 px-8">
        <h1 className="text-xl font-semibold text-[#00ADB5]">Task Manager</h1>
        <p>
          Um simples{' '}
          <span className="text-[#00ADB5]">Organizador de tarefas</span>
        </p>
      </div>
      <div className="flex flex-col gap-2 p-2">
        <SidebarButton variant="unselected"> Início</SidebarButton>
        <SidebarButton variant="selected"> Minhas Tarefas</SidebarButton>
      </div>
    </div>
  );
};

export default Siderbar;
