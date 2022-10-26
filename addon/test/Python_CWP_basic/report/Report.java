package report;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Files;
import java.text.SimpleDateFormat;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;
import java.util.zip.ZipEntry;
import java.util.zip.ZipOutputStream;

import javax.swing.JFileChooser;
import javax.swing.JOptionPane;
import javax.swing.filechooser.FileFilter;
import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.parsers.ParserConfigurationException;

import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.xml.sax.SAXException;

//import org.apache.commons.compress.utils.IOUtils;

public class Report {

	static File tfile = new File("jplasStock");
	static String value;

	public static void main(String[] args) {

		Report();
	}

	public static void Report() {
		try {
			XmlReader();
		} catch (Exception e) {
			e.printStackTrace();
		}
		// String message = "��o�p�̈��k���ɂ��쐬���܂��D��o�҂̔ԍ�����͂��Ă��������D";
		String message = "Create a compressed archive for submission. Please enter the number of the submitter.";
		value = JOptionPane.showInputDialog(null, message);
		if (value != null && value.length() > 0) {

			try {
				BufferedWriter bw = new BufferedWriter(new FileWriter(
						"jplasStock/test_result.txt"));
				BufferedReader br = new BufferedReader(new FileReader(
						"result.txt"));
				String line = "";
				while ((line = br.readLine()) != null) {
					System.out.println(value + line);
					bw.write(value + " " + line);
					bw.newLine();

				}
				bw.flush();
				bw.close();
				br.close();
			} catch (IOException e) {

				e.printStackTrace();
			}

			JFileChooser fc = new JFileChooser();
			fc.setFileFilter(new FileFilter() {
				@Override
				public boolean accept(File pathname) {
					return pathname.getName().endsWith(".zip");
				}

				@Override
				public String getDescription() {
					return "zip";
				}
			});
			int rtn = fc.showSaveDialog(null);
			if (rtn == 0) {
				File sFile = fc.getSelectedFile();
				if (!sFile.getName().endsWith(".zip")) {
					sFile = new File(sFile.getAbsolutePath() + ".zip");
				}
				makeZip(sFile);
			}
		}

	}

	static private void makeZip(ZipOutputStream zip, File file)
			throws IOException {
		for (File f : file.listFiles()) {
			if (f.isFile()) {
				InputStream fi = new FileInputStream(f);
				String filename = f.getAbsolutePath().replace(
						tfile.getAbsolutePath(), "");
				filename = value + filename;
				zip.putNextEntry(new ZipEntry(filename));
				byte[] bf = new byte[1024];
				int x = Integer.MIN_VALUE;
				while ((x = fi.read(bf)) > 0) {
					zip.write(bf, 0, x);
				}
				zip.closeEntry();
			}
			if (f.isDirectory()) {
				makeZip(zip, f);
			}
		}
	}

	static private void makeZip(File zip) {
		try {
			ZipOutputStream zippoFile = new ZipOutputStream(
					new FileOutputStream(zip));
			makeZip(zippoFile, tfile);
			zippoFile.close();
		} catch (Exception e) {
			// JOptionPane.showMessageDialog(null, "��o�t�@�C���̍쐬�Ɏ��s���܂���");
			JOptionPane.showMessageDialog(null, "Failed to create the submission file.");
		}
	}

	public static void record(String name) {
		String testFileName = name.replace('.', '/') + ".java";
		System.out.println(testFileName);
		File file = new File("src");
		tfile.mkdirs();
		File tafile = new File(tfile, testFileName.split("/")[0]);
		tafile.mkdirs();
		String srcFileName = testFileName.replace("Test.java", ".java");
		LocalDateTime nowLocalDt = LocalDateTime.now();
		String instantStr2 = DateTimeFormatter.ofPattern("yyyyMMddHHmmss")
				.format(nowLocalDt) + ".txt";
		try {
			Files.copy(new File(file, srcFileName).toPath(), new File(tafile,
					instantStr2).toPath());
		} catch (IOException e) {
		}
	}

	public static void domRead(File[] files) throws SAXException, IOException,
			ParserConfigurationException {
		// DocumentBuilder�́AXML�h�L�������g��DOM�iDocument Object
		// Model)��Document�C���X�^���X���擾����API���
		//DocumentBuilder provides an API to retrieve Document instance of DOM 
		//(Document Object Model) XML document
		DocumentBuilderFactory factory = DocumentBuilderFactory.newInstance();
		DocumentBuilder documentBuilder = factory.newDocumentBuilder();

		File result = new File("result.txt");
		FileWriter filewriter = new FileWriter(result, true);

		LinkedList<String> array = new LinkedList<String>();
		for (File file : files) {

			if (file != null) {

				try {

					Document document = documentBuilder.parse(file);

					Element root = document.getDocumentElement();
					// �t�@�C���X�V���Ԃ̕\��
					//Display file update time
					SimpleDateFormat sdf = new SimpleDateFormat(
							"yyyy/MM/dd HH:mm:ss");

					System.out.println(sdf.format(file.lastModified()));
					// ���[�g�v�f�̃m�[�h�����擾����root.getNodeName()
					// Get the node name of the root element root.getNodeName ()
					System.out.println("�m�[�h���F" + root.getTagName());

					// ���[�g�v�f�̑������擾����
					// Get root element attribute
					System.out.print("���[�g�v�f�̑����F(Root element attributes:)" + root.getAttribute("name"));
					System.out.print("project���O�F(name:)"
							+ root.getAttribute("project") + " ");
					System.out
							.print("�e�X�g���F(Number of tests:)" + root.getAttribute("tests") + " ");
					// System.out.print("started�̐��F(Number of started)"
					// + root.getAttribute("started") + " ");
					//System.out.print("failures�̐��F(Number of failures:)"
					//		+ root.getAttribute("failures") + " ");
					//System.out.print("errors�̐��F(Number of errors)" + root.getAttribute("errors")
					//		+ " ");
					System.out.print("timestamp�̐��F(Number of timestamps)"
							+ root.getAttribute("timestamp") + " ");
					//System.out.print("hostnane�F"
					//		+ root.getAttribute("hostname") + " ");
					System.out.print("name�F"
							+ root.getAttribute("name") + " ");
					/*System.out.print("package�F"
							+ root.getAttribute("package") + " ");*/
					System.out.print("time�F"
							+ root.getAttribute("time") + " ");
					// System.out.print("ignored�̐��F"
					// + root.getAttribute("ignored") + " ");
					System.out.println();
					System.out.println("**************************************");

					array.add(sdf.format(file.lastModified()) + " "
							+ root.getAttribute("name") + " "
							+ root.getAttribute("project") + " "
							+ root.getAttribute("tests") + " "
							+ root.getAttribute("failures") + " "
							+ root.getAttribute("errors") + " \r\n");

					for (int i = 0; i < array.size(); i++) {
						String country = array.get(i);
						filewriter.write(country);
					}

				} catch (Exception e) {
					throw new RuntimeException(e);
				}

			}

		}
		filewriter.close();

	}

	/*private static boolean checkBeforeWritefile(File file) {
		if (file.exists()) {
			if (file.isFile() && file.canWrite()) {
				return true;
			}
		}

		return false;
	}*/

	public static void XmlReader() throws Exception, IOException,
			ParserConfigurationException {

		File srcFile = new File("junit/");

		// Get XML files
		List<File> xmlFiles = new ArrayList<>();
		File[] files = srcFile.listFiles();
		for (File f : files) {
			if (f.isDirectory()) {
			//	System.out.println(f.getName() + "is dir.");
			} else { // file
				String fileName = f.getName();
				if (fileName.matches("^TEST-p.*\\.xml")) {
				//	System.out.println(fileName);
					xmlFiles.add(f);
				}
			}
		}

		files = xmlFiles.toArray(new File[xmlFiles.size()]);
		domRead(files);

	}
}
