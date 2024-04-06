'use client'

import { usePathname } from "next/navigation";
import { useState } from "react";
import Modal from "~/ui/Modal";
import AddSvg from "~/utils/AddSvg";
import Button from "~/utils/Button";
import CreateLink from "../CreateLink/CreateLink";

export default function ActionBar() {
  const [createModal, setCreateModal] = useState(false)
  const pathname = usePathname()

  return (
    <div className="flex flex-col gap-3 md:flex-row  justify-between">
      <div >
        <form action="">
          <input
            type="text"
            placeholder="Search..."
            className='input' />
        </form>
      </div>
      <div className="flex flex-col md:flex-row gap-3">
        {pathname === '/dashboard' ?
          <Button onClick={() => setCreateModal(true)}>
            <div className="flex gap-1">
              <AddSvg className="fill-white h-4 self-center" /> Create new Link
            </div>
          </Button> :
          <Button>
            <div className="flex gap-1">
              <AddSvg className="fill-white h-4 self-center" /> Create new QR Code
            </div>
          </Button>
        }
      </div>
      <Modal
        title={"Create New Link"}
        setState={setCreateModal}
        state={createModal}>
        <CreateLink setCreateModal={setCreateModal} />
      </Modal>
    </div>
  )
}