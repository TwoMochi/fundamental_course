import React, { Suspense, useState } from 'react';
import './styles/index.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { Modal } from 'shared/ui/Modal/Modal';


 App() {
    const { theme } = useTheme();

    const [isOpen, setIsOpen] = useState(false);eturn (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <Navbar />
      
                <button onClick={() => setIsOpen(true)}>toggle</button>
                <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis vero maxime, dolores quaerat cupiditate ratione eius veritatis explicabo sit, nostrum deserunt, hic blanditiis sequi distinctio quisquam aut odit architecto asperiores.
                </Modal>          <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
}

export default App;
