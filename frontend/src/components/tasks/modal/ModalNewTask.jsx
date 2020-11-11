import React, {useState} from 'react';
import {Modal, Button, Form} from 'react-bootstrap'
import 'react-nice-dates/build/style.css'
import * as methods from './ModalMethods'


export default function ModalNewTask({addTask, showModalInsertar, closeModalInsertar}) {
    const now = new Date()
    const tomorrow = new Date(now)
    tomorrow.setDate(tomorrow.getDate() + 1)
    const getNow = now.getFullYear()+"-"+now.getMonth()+"-"+now.getDate()+"T"+now.getHours()+":"+now.getMinutes()
    const getTomorrow = tomorrow.getFullYear()+"-"+tomorrow.getMonth()+"-"+tomorrow.getDate()+"T"+tomorrow.getHours()+":"+tomorrow.getMinutes()


    const [textTask, setText] = useState("");
    const [titleTask, setTitle] = useState("");
    const [priority, setPriority] = useState('low');
    const [beginDate, setBeginDate] = useState(getNow);
    const [endDate, setEndDate] = useState(getTomorrow);

    function agregarTarea() {
        const prio = priority === "high" ? 0 : priority === "med" ? 1 : 2
        addTask({
            titulo: titleTask,
            descripcion: textTask,
            prioridad: prio,
            inicio: beginDate,
            fin: endDate,
        })
        methods.clearFields(setTitle, setText, setPriority, setBeginDate, setEndDate)
    }

    return (
        <>
            <Modal show={showModalInsertar}
                   keyboard={false}
                   onHide={closeModalInsertar}
                   backdrop="static"
                   onExited={() => methods.clearFields(setTitle, setText, setPriority, setBeginDate, setEndDate)}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Crea tu nueva tarea!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <Form.Group>
                            <Form.Label as='legend'>Title</Form.Label>
                            <Form.Control
                                className="form-control"
                                type="text" placeholder="Title"
                                value={titleTask}
                                onChange={(event) => methods.handleTitleChange(event, setTitle)}
                            />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label as={'legend'}>Description</Form.Label>
                            <textarea
                                className="form-control"
                                id="exampleFormControlTextarea1"
                                rows="3" value={textTask}
                                onChange={(event) => methods.handleContentChange(event, setText)}
                                placeholder="Describe your task (optional)"
                            />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label as="legend">
                                Priority
                            </Form.Label>
                            {['low', 'med', 'high'].map((prio) => (
                                <Form.Check
                                    type="radio"
                                    label={prio}
                                    inline
                                    checked={methods.isAPriority(prio, priority)}
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios1"
                                    onClick={() => setPriority(prio)}
                                    selected={() => priority === prio}
                                />
                            ))}

                        </Form.Group>
                        <div>
                            <Form.Label as="legend">
                                Start Date
                            </Form.Label>
                            <Form.Control
                                type='datetime-local'
                                name='start'
                                value={beginDate}
                                onChange={(ev) => {
                                    setBeginDate(ev.target.value)
                                }}
                            >
                            </Form.Control>
                            <Form.Label as="legend">
                                End Date
                            </Form.Label>
                            <Form.Control
                                type='datetime-local'
                                name='start'
                                value={endDate}
                                onChange={(ev) => {
                                    setEndDate(ev.target.value)
                                }}
                            >
                            </Form.Control>

                        </div>
                    </form>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={closeModalInsertar}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={agregarTarea}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
