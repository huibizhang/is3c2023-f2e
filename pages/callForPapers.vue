<template>
  <Main pageName="Call For Papers">
    <ContentBlock title="Call For Papers">
      The International Symposium on Computer, Consumer and Control
      (<b>IS3C2023</b>) sponsored by National Chin-Yi University of Technology,
      held on June 30 - July 3, 2023. This conference offers an excellent
      opportunity for scientists, engineers, and practitioners to present the
      latest research results, ideas, developments, and applications. IS3C, held
      every two years, is hosted by National Chin-Yi University of Technology,
      Taichung, Taiwan. As suggested by the name of the conference, the themes
      of this conference cover computer, multimedia and intelligent,
      communication application, integrated circuits, consumer electronics,
      renewable energy, systems and control, and digital signal processing.
      Original high-quality papers related to these themes are especially
      solicited, including theories, methodologies, and applications in
      Computing, Consumer, and Control. Selected papers will be published in the
      conference proceedings, and some excellent articles will be recommended to
      related SCI(E)/ EI journals (MDPI Electronics, MDPI Processes, MDPI
      Machines, Computer Systems Science and Engineering, Applied Sciences,
      Sensors and Materials, Multimedia Tools and Applications (MTAP), IJ3C) for
      publication.

      <div class="flex w-full flex-col items-center space-y-4 p-5">
        <FileLink v-for="file in files" :key="file.filename" v-bind="file" />
      </div>
    </ContentBlock>

    <ContentBlock title="Invited Sessions" level="2">
      The IS3C2023 welcomes proposals for organizing special sessions within the
      conference scope. A brief statement of the session in one page must be
      submitted to
      <a class="link" href="mailto:is3c2023@ncut.edu.tw">is3c2023@ncut.edu.tw</a
      >. The organizer will be informed the acceptance soon after the proposal
      is approved.
      <br />
      <br />
      <center>
        <span class="link">
          Proceedings of IS3C2023 will be submitted to IEEE Xplore as well as EI
          index.</span
        >
      </center>
    </ContentBlock>
    <hr />
    <ContentBlock>
      Original papers describing current researches in the following themes are
      invited but not limited in.<br />
      <br />
      <TrackCard
        v-for="(track, i) in tracks"
        :key="track.name"
        v-bind="{ index: i, ...track }"
      />
    </ContentBlock>
  </Main>
</template>

<script>
import FileLink from '~/components/FileLink.vue'

export default {
  name: 'CallForPapers',
  data() {
    return {
      files: [
        {
          filename: 'IS3C 2023-ABSTRACT-TEMPLATE.docx',
          link: '/files/IS3C%202023-ABSTRACT-TEMPLATE.docx',
        },
        {
          filename: 'conference-template-a4.docx',
          link: '/files/conference-template-a4.docx',
        },
      ],
      tracks: [
        {
          name: 'COMPUTER',
          descriptions: [
            'Computer Networks, Mobile Computing and Cloud Computing Technologies',
            'Digital Content and Web Service',
            'Software Engineering, Service-Oriented Architecture and Databases',
            'Artificial Intelligence, Knowledge Discovery and Fuzzy Systems',
            'Meta-Heuristic Algorithms and Optimization',
            'Information Security, Digital Right and Watermarking',
          ],
        },
        {
          name: 'MULTIMEDIA & INTELLIGENT COMPUTING',
          descriptions: [
            'Hardware and Software for Multimedia Systems',
            'Virtual Reality, AR, MR, 3D Processing and Application',
            'Signal, Audio, Speech Analysis and Processing',
            'Image Processing and Applications',
            'Computer Vision and Applications',
            'Machine Learning and Applications',
            'Multimedia Forensics and Security',
            'Human-Machine Interface',
          ],
        },
        {
          // name: 'COMMUNICATION APPLICATION',
          name: 'AIoT, ICT & SENSOR APPLICATIONS',
          descriptions: [
            // 'Broadband Mobile and Wireless Communications',
            // 'Internet of Things (IoT) and Machine-to-Machine (M2M) Communication',
            // 'Sensor Networks, RFID Technology and Applications',
            // 'Big Data in Communications',
            // 'High Frequency and Microwave Circuits',
            // 'Radio and Microwave Engineering',
            'Internet of Things (IoT), Industrial Internet of Things (IIoT) and Artificial Intelligence of Things (AIoT)',
            'Information and Communication Technology (ICT), Big Data and Analytics, Artificial Intelligence and Machine Learning',
            'Cyber-Physical Systems, Embedded Systems, System Integration and Application',
            'Sensing Principles and Mechanisms, Sensor Devices, Sensor Networks, Image Sensors, Systems & Applications',
          ],
        },
        {
          name: 'SEMICONDUCTOR DEVICES & INTEGRATED CIRCUITS',
          descriptions: [
            'Systems on Chip',
            'Application of Microelectronics ',
            'Device Modeling, Simulation and Design ',
            'Material and New Fabrication Facilities Technologies ',
            'Nano Technology ',
            'Sensors, Sensing Technology and Sensor Materials',
            'Micro Electro Mechanical Systems',
            'Microactuators',
          ],
        },
        {
          name: 'CONSUMER ELECTRONICS',
          descriptions: [
            'Human-Machine Interfaces',
            'Intelligent Robot and Its Applications',
            'Computer and Microprocessor-Based Control',
            'Home/Automotive Electronics Design',
            'Signal Processing in Measurement',
            'Sensor Applications',
            'Low Power Circuit Design',
            'Electro-optical devices and systems',
          ],
        },
        {
          name: 'RENEWABLE ENERGY',
          descriptions: [
            'Renewable Energy Technologies',
            'Photovoltaic and Wind Energy Technologies',
            'Power Conversions of Renewable Energy',
            'Applications of Power Electronics in Power Systems',
            'Smart Grid Systems',
            'Applications of Renewable Energy in Wireless Charging Systems',
          ],
        },
        {
          name: 'SYSTEMS AND CONTROL',
          descriptions: [
            'System Modeling and Simulation, Dynamics and Control',
            'Intelligent and Learning Control ',
            'Robotics and Mechatronics',
            'Robust and Nonlinear Control',
            'Biomedical Systems and Control',
            'Artificial Intelligence and Internet of Things (AIoT) and Related Applications',
          ],
        },
        {
          name: 'DIGITAL SIGNAL PROCESSING',
          descriptions: [
            'Digital Signal Processing Theory and Methods',
            'Statistical Signal Processing and Applications',
            'Biomedical and Biological Signal Processing',
            'Neural Networks, Fuzzy Systems, Expert Systems, Genetic Algorithms and Data Fusion for Signal Processing',
            'Embedded Systems for Signal Processing',
          ],
        },
        {
          name: 'ARTIFICIAL INTELLIGENCE AND COMPUTER ENGINEERING',
          descriptions: [
            'AI Image Classification, Processing and Applications',
            'AI Deep Learning and Its Applications',
            'AI in Medical Field',
            'AI in Cyber Security',
            'AIoT and AIoT-based Applications',
            'Cloud AI, Edge AI and Terminal AI',
            'X Reality (XR) and X Technology in Metaverse',
          ],
        },
      ],
    }
  },
  head() {
    return {
      title: `Call for Papers | ${this.$title}`,
    }
  },
}
</script>
